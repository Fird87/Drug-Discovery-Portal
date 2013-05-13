package org.molplexdrug.EntityBean;


import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

@Name("ratingBean")
@Scope(ScopeType.SESSION)
public class RatingBean implements Serializable {
// ------------------------------ FIELDS ------------------------------

    private int intValue;
    private String stringValue;
    private List<String> values = Arrays.asList("Poor", "Average", "Acceptable", "Good", "Very Good");

// --------------------- GETTER / SETTER METHODS ---------------------

    public int getIntValue() {
        return intValue;
    }

    public void setIntValue(int intValue) {
        this.intValue = intValue;
    }

    public String getStringValue() {
        return stringValue;
    }

    public void setStringValue(String stringValue) {
        this.stringValue = stringValue;
    }

    public List<String> getValues() {
        return values;
    }
}
