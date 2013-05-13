package org.molplexdrug.EntityBean;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Begin;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.annotations.web.RequestParameter;
import org.jboss.seam.framework.EntityHome;

import org.molplexdrug.EntityBean.Attachment;

@Name("attachmentHome")
@Scope(ScopeType.CONVERSATION)
public class AttachmentHome extends EntityHome<Attachment>
{
    @RequestParameter Long attachmentId;

    @Override
    public Object getId()
    {
        if (attachmentId == null)
        {
            return super.getId();
        }
        else
        {
            return attachmentId;
        }
    }

    @Override @Begin
    public void create() {
        super.create();
    }

}
