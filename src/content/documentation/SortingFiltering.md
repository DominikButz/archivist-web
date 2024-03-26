# Sorting and Filtering Documents


Each document in Archivist has three dates associated with it:

1.  **Document date:** If a date is found within the document itself,
    such as the date on an invoice, Archivist will set this as the
    document date. However, if no date is detected in the document text,
    the document date will be the same as the creation date.

2.  **Creation date:** This is the date when the Archivist document is
    created and may differ from the document date.

3.  **Modification date:** Whenever a document is modified, such as
    changing the title or adding a topic and saving the document, the
    modification date is updated to the current
    date.
    
![](/media/documentCellWithDate.png)

The date displayed in the top right corner of each document cell in the
document list of the \"Archive\" tab depends on the date type currently
set for the document list. The date type also affects the position of
the document cell in the list based on the current sorting order.


On MacOs, you can access the sorting view directly by clicking on the
sorting view control button on the navigation bar. 

On iOS / iPadOS, the sorting controls are part of the filter control view.

To access the filter attributes view tap the control button on the top right. 
![](/media/filterView.png)

In addition to the sorting controls mentioned earlier, the filter
attributes view allows you to set the following filters:

-  Archive drawers
-  Topics
- Document types
- Start and/or end date (both inclusive)

Since a document can only be part of one drawer and only have one document type, multiple selections are logically combined using an "OR"
operator.

However, when selecting multiple topics, they are combined using an
"AND" operator.

The start and end date always refer to the date type set in the sorting section.

As shown in the screenshot, the filter attributes view includes a reset button on the top left, which, when pressed, removes all filter
attributes and resets the sorting parameters to their default values
(\"document date\" and \"newest first").

Changes in the filter attributes view must be confirmed by pressing the
checkmark button in the top right corner; otherwise, the filter settings
will not be applied to the document list.

Once at least one filter label is set, the document list will show the filter label bar in the list header (this bar is always visible on macOS so that filter labels can be set by dragging document attribute labels
from the document attributes window onto the bar).

Alternatively, you can quickly filter the document list by typing a
search keyword in the search bar. The list will be filtered based on the
keywords, searching through all text fields of the
documents.

By pressing the Bookmark button on the top bar of the
document list, you can toggle the display of only bookmarked documents on and off.