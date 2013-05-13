package org.molplexdrug.EntityBean;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.framework.EntityQuery;
import org.molplexdrug.EntityBean.Attachment;

@Name("attachmentList")
public class AttachmentList extends EntityQuery<Attachment>
{
    public AttachmentList()
    {
        setEjbql("select attachments from Attachments attachments");
    }
    
    @Override
    public String getEjbql() 
    { 
        return "select attachment from Attachment attachment";
    }
}
