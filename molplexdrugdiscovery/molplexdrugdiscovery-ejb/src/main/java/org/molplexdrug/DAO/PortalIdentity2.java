/*** Eclipse Class Decompiler plugin, copyright (c) 2012 Chao Chen (cnfree2000@hotmail.com) ***/
package org.molplexdrug.DAO;

import java.lang.reflect.Method;
import java.security.Principal;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.security.auth.login.LoginException;
import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Install;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.annotations.Startup;
import org.jboss.seam.annotations.intercept.BypassInterceptors;
import org.jboss.seam.log.Log;
import org.jboss.seam.log.Logging;
import org.jboss.seam.security.Identity;

@Name("org.jboss.seam.security.identity")
@Scope(ScopeType.SESSION)
@BypassInterceptors
@Install(precedence = Install.FRAMEWORK+1)
@Startup
public class PortalIdentity2 extends Identity {
	private static final Log log = Logging.getLog(PortalIdentity2.class);

	private JBossLoginDelegate loginDelegate = new JBossLoginDelegate();

	public void authenticate() throws LoginException {
		if (!(isLoggedIn()))
			this.loginDelegate.login(getUsername(), getPassword());
	}

	public void logout() {
		this.loginDelegate.logout();
		super.logout();
	}

	public boolean hasPermission(String name, String action, Object[] arg) {
		return super.hasPermission(name, action, arg);
	}

	public boolean hasRole(String role) {
		return FacesContext.getCurrentInstance().getExternalContext()
				.isUserInRole(role);
	}

	public boolean isLoggedIn() {
		return (null != getPrincipal());
	}

	public boolean isLoggedIn(boolean attemptLogin) {
		return isLoggedIn();
	}

	public String getUsername() {
		if (!(isLoggedIn())) {
			return super.getUsername();
		}
		String userName = null;
		FacesContext facesContext = FacesContext.getCurrentInstance();
		if (null != facesContext) {
			ExternalContext externalContext = facesContext.getExternalContext();

			if (null != externalContext.getUserPrincipal()) {
				userName = externalContext.getRemoteUser();
			}
		}
		return userName;
	}

	public Principal getPrincipal() {
		return ((FacesContext.getCurrentInstance() == null) ? null
				: FacesContext.getCurrentInstance().getExternalContext()
						.getUserPrincipal());
	}

	private static class JBossLoginDelegate {
		private Class authenticationClass;
		private Object jbossAuthentication;

		public JBossLoginDelegate() {
			try {
				this.authenticationClass = Class
						.forName("org.jboss.web.tomcat.security.login.WebAuthentication");
			} catch (ClassNotFoundException ex) {
				//PortalIdentity2.log.info(
						//"JBoss Web Authentication is not available...",
						//new Object[0]);
			}
			try {
				this.jbossAuthentication = this.authenticationClass
						.newInstance();
			} catch (Exception e) {
				//PortalIdentity2.log
					//	.error("JBoss Web Authentication instantiation exception, Web Authentication disabled",
							//	e, new Object[0]);
			}
		}

		public void login(String username, String password) {
			if ((this.authenticationClass == null)
					|| (this.jbossAuthentication == null))
				return;
			try {
				Method m = this.authenticationClass.getMethod("login",
						new Class[] { String.class, Object.class });
				m.invoke(this.jbossAuthentication, new Object[] { username,
						password });
			} catch (Exception ex) {
				PortalIdentity2.log.error(
						"Error logging out with JBoss Web Authentication", ex,
						new Object[0]);
			}
		}

		public void logout() {
			if ((this.authenticationClass == null)
					|| (this.jbossAuthentication == null))
				return;
			try {
				Method m = this.authenticationClass.getMethod("logout",
						new Class[0]);
				m.invoke(this.jbossAuthentication, new Object[0]);
			} catch (Exception ex) {
				PortalIdentity2.log.error(
						"Error logging out with JBoss Web Authentication", ex,
						new Object[0]);
			}
		}
	}
}