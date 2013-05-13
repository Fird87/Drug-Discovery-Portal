package org.molplexdrug.EntityBean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Create;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

/**
 * Controller for a simple slideshow UI element. The controller selects images
 * randomly from a resource folder for display. The UI is expected to consist of
 * two overlapping image elements (called "frames", but not in the HTML sense).
 * These are updated with new images on an alternating basis every time the
 * {@link #transition()} method is called. The reason for having two frames
 * instead of one is that it enables the implementation of smooth transitions
 * such as fading on the client side. Each frame is assigned an ID that
 * corresponds to the element (e.g. HTML) ID. The controller exposes properties
 * that allow the view to determine which frame should be active and visible at
 * any given time. Initially, the second frame is active, since it would be the
 * topmost element in z-order by default.
 */
@Name("slideShowController")
@Scope(ScopeType.PAGE)
public class SlideShowController implements Serializable {
 
 /**
 * The path relative to the web root containing random images to be chosen.
 * The path should begin and end with a forward slash and contain only
 * eligible images. At least two images MUST be present in the path.
 */
 private static final String IMAGES_PATH = "/resources/images/slideshow/";
 
 /**
 * The first frame component ID.
 */
 private String m_firstFrameComponentId;
 
 /**
 * The second frame component ID.
 */
 private String m_secondFrameComponentId;
 
 /**
 * Resource paths to image files.
 */
 private List<String> m_imageFiles;
 
 /**
 * Path to the image contained in the first frame.
 */
 private String m_firstFrameImage;
 
 /**
 * Path to the image contained in the second frame.
 */
 private String m_secondFrameImage;
 
 /**
 * True if the first frame is showing. False if the second frame is showing.
 */
 private boolean m_showingFirstFrame = false;
 
 /**
 * The Seam context.
 */
 @In(value = "facesContext")
 private FacesContext m_facesContext;
 
 /**
 * Create new instance.
 */
 public SlideShowController() {
 // No op.
 }
 
 /**
 * Set up initial controller state.
 */
 @Create
 public void init() {
 ExternalContext externalContext = m_facesContext.getExternalContext();
 Set<String> resourcePaths = externalContext.getResourcePaths(IMAGES_PATH);
 if (resourcePaths.size() < 2) {
 // We can get into an infinite loop if there are less than two
 // unique images.
 throw new IllegalStateException("Image list must have at least two images.");
 }
 String uuid = UUID.randomUUID().toString();
 if (m_firstFrameComponentId == null)
 m_firstFrameComponentId = "frame1-" + uuid;
 if (m_secondFrameComponentId == null)
 m_secondFrameComponentId = "frame2-" + uuid;
 m_imageFiles = Collections.unmodifiableList(new ArrayList<String>(resourcePaths));
 m_firstFrameImage = getRandomImageFile();
 m_secondFrameImage = m_firstFrameImage;
 }
 
 /**
 * Choose and return a random image file from the images folder.
 */
 private String getRandomImageFile() {
 return m_imageFiles.get((int) (Math.random() * (double) m_imageFiles.size()));
 }
 
 /**
 * Path to the image contained in the first frame.
 */
 public String getFirstFrameImage() {
 return m_firstFrameImage;
 }
 
 /**
 * Path to the image contained in the second frame.
 */
 public String getSecondFrameImage() {
 return m_secondFrameImage;
 }
 
 /**
 * Get component ID of the currently active frame.
 */
 public String getActiveFrameComponentId() {
 if (m_showingFirstFrame) {
 return m_firstFrameComponentId;
 } else {
 return m_secondFrameComponentId;
 }
 }
 
 /**
 * Get component ID of the currently active frame.
 */
 public String getInactiveFrameComponentId() {
 if (m_showingFirstFrame) {
 return m_secondFrameComponentId;
 } else {
 return m_firstFrameComponentId;
 }
 }
 
 /**
 * True if the first frame is showing. False if the second frame is showing.
 */
 public boolean isShowingFirstFrame() {
 return m_showingFirstFrame;
 }
 
 /**
 * The first frame component ID.
 */
 public String getFirstFrameComponentId() {
 return m_firstFrameComponentId;
 }
 
 /**
 * The first frame component ID.
 */
 public void setFirstFrameComponentId(String firstFrameComponentId) {
 m_firstFrameComponentId = firstFrameComponentId;
 }
 
 /**
 * The second frame component ID.
 */
 public String getSecondFrameComponentId() {
 return m_secondFrameComponentId;
 }
 
 /**
 * The second frame component ID.
 */
 public void setSecondFrameComponentId(String secondFrameComponentId) {
 m_secondFrameComponentId = secondFrameComponentId;
 }
 
 /**
 * The Faces context.
 */
 public FacesContext getFacesContext() {
 return m_facesContext;
 }
 
 /**
 * The Faces context.
 */
 public void setFacesContext(FacesContext facesContext) {
 m_facesContext = facesContext;
 }
 
 /**
 * Transition from one frame to the other. A new, random image is selected
 * for the next frame, which is guaranteed to be different from the prior
 * frame. At least two images MUST be present in the image path.
 */
 public void transition() {
 if (m_showingFirstFrame) {
 // Fetch new (unique!) image for the second frame.
 do {
 m_secondFrameImage = getRandomImageFile();
 } while (m_secondFrameImage.equals(m_firstFrameImage));
 } else {
 // Fetch new (unique!) image for the first frame.
 do {
 m_firstFrameImage = getRandomImageFile();
 } while (m_firstFrameImage.equals(m_secondFrameImage));
 }
 // Switch active frames.
 m_showingFirstFrame = !m_showingFirstFrame;
 }
}
