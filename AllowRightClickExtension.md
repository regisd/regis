Some sites prohibit the use of the right-click or context-menu.
This extension does it best to restore the default behaviour.


# Known limitations #

Also, there are some limitations imposed by the design of Google chrome ; there is no way to unlock content if it is:

  * if the content is written by javascript

# Details #

  * Removes the **oncontextmenu** javascript action defined by the page, so that it returns to the default Chrome behaviour:
    * on **body**, **td**, **img** and **div** DOM elements
    * on every http or https page

&lt;wiki:gadget url="http://www.ohloh.net/p/486941/widgets/project\_languages.xml" border="1"/&gt;