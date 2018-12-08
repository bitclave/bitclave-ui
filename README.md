# bitclave-ui
UI Components for Angular

## Summary
Bitclave-UI is a centralized repository of simple and re-useable UI components. Currently, the project consists of a Layout Module
which allows a developer to quickly assemble a 12 column grid by aliasing Bootstrap's Grid. This module grants the capabilities of
Bootstrap's Grid System with a less verbose syntax. 

A UI Grid could be assembled by simply adding the following three elements to a template:
    
    <layout-component>
        <layout-row>
            <layout-column size="12">
            </layout-column>
        </layout-row>
    </layout-component>`

The above example would create a 12 column grid with one row, containing a single column that spans all 12 columns of the grid.
This example would be compiled down to something very close to the following html 
(nghost/ngcontent/ngreflect attributes removed for simplicity):

    <layout-container class="container layout-container">
	    <layout-row class="row layout-row">
		    <layout-column size="12" class="layout-column col-xs-12 col-md-12">
		    </layout-column>
	    </layout-row>
    </layout-container>

## Advantages
This aliasing of Bootstrap's Grid System allows a developer to leverage both Bootstrap's responsiveness and Angular/HTML 5's
custom element/web components:

The user doesn't need to be concerned with adding all of the correct classes on non-descript container elements and,
the resulting html becomes self-documenting and easier to debug (errors are thrown at compile time instead of left to the user to 
find their own typos inside of class names at runtime).

## Usage
The layout-column component supports Bootstrap's size (column span) and offset (columns to skip). Therefore, the following would add another
row with two columns, the first starting at position 2 and extending 4 columns, and then the next column starting at position 5 and
extending to the end of the grid. (Each row's columns should add up to 12 - counting all offsets and sizes).

    <layout-component>
        <layout-row>
            <layout-column size="12">
            </layout-column>
        </layout-row>
        <layout-row>
            <layout-column offset="2" size="4">
            </layout-column>
            <layout-column size="6">
            </layout-column>
        </layout-row>
    </layout-component>`

The layout row component also has a padding field which will add left and right padding to the row:

    <layout-component>
        <layout-row padding="20%">
            <layout-column size="12">
            </layout-column>
        </layout-row>
    </layout-component>`
