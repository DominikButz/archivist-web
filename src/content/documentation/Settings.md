# Settings

On iOS/iPadOS, the settings view has its dedicated tab on the tab bar.
However, on MacOS, the app settings are only accessible through a separate
window. To open the settings window on MacOS, click on the app name in
the taskbar and then select the \"Settings\" menu option or, simply click on the "gear" icon in the top right corner of the main app window. 

![](/media/settingsView.png)

## Document Properties

In the "Document Properties" segment, you can set the option to find the document type and topic(s) in the filename. If setting both properties
is successful when creating a new document, AI document properties
analysis will not be attempted.

For instance, if a filename contains the words \"travel\" and
\"insurance,\" those two topics will be set automatically. This feature is only applicable to imported files and images since scanned documents don't have meaningful filenames.

The second option in this section allows you to switch "AI Document
Properties Detection" on or off. This means that if the document type or at least one topic has not been found in the filename (if any), Archivist will ask Open AI's GPT 3.5 Turbo to analyse an excerpt of the document in order to find at least one topic, the document type and the title of the document. This option is switched off by default. Every new
user of Archivist gets 10 AI document tokens for free. More tokens can be bought in the "In-App Purchases" section.

## Customising iCloudDrive Folder Names

The settings window also allows you to customise iCloud Drive folder names for all drawers and topics, including system items. All PDF documents are stored in the \"DrArchiver\" folder within your iCloud Drive directory, following the path structure:

Drawer \> Topic \> Document Date (Year)

Please note that due to a restriction imposed by Apple's CloudKit framework, we were not able to change the root folder name any more to "Archivist" during beta testing phase.

If you are using the MacOS version of Archivist, this segment also contains options to "Auto-set topics as Finder File Tags" and "Auto-set document types as Finder File Tags". This options have the benefit to set Finder file tags every time a new document is created. 

You can also manually trigger setting Finder file tags by clicking on the related buttons. 

Please be aware that the tags are grey by default and colours can only be set in the Finder. 

## Restoring Deleted System Items

Furthermore, settings includes an option to restore deleted system
drawers, topics and the "Archivist QSG" document in case you have deleted the quick start guide and would like to restore it. 

To start the restoration process, simply click on the respective button. In case there is nothing to restore, the respective option will be disabled. 

## In-App Purchases

Without paying for Archivist's full version, you can create up to 10 documents. Consider to but the full version in the In-App Purchases segment - it will cost you much less than a cup of coffee.

In the same segment, you can also buy AI document properties detection tokens, provided you have unlocked the full version. One token is used for each new document where the properties detection through the file name fails or is switched off. Make sure to switch on the AI properties detection option if you want to use this feature (by default, it is switched off).

## Other Settings

Lastly, the \"Other settings\" section provides options to clear the local file cache. If this option is selected, any PDF file of a document you subsequently open will need to be reloaded from iCloud Drive.

Additionally, if you handle documents containing Chinese characters, make sure to activate the corresponding option. Otherwise, Chinese characters may not be recognised and won\'t appear correctly in the
\"Content\" section of the document editing view. By default, this
option is disabled if none of your system languages include Chinese.
Please note that if this option is enabled, only English can be
recognised along with Chinese. That means any special characters, e.g. the German Umlaut, will not be recognised properly if the option to recognise Chinese characters is enabled.