# Manual Schoology Website Insertion

[Opening Dev Tools (Inspect Element)](#opening-dev-tools-inspect-element)  
[Getting To The Message Box](#getting-to-the-message-box)  
[Inserting The Iframe](#inserting-the-iframe)

If you just want to know how to add an iframe into Schoology, go
[here](https://github.com/BubbyBabur/SchoologyHacks/blob/master/README.md).  
But if for some reason that isn't working or you just want to do it yourself, then you're in the right place.

Also, these instructions are aimed towards Google Chrome users, so if you are using any other web browser this may not work.

## Opening Dev Tools (Inspect Element)
There are a couple ways to open Chrome Dev Tools.

You can right click the page and click "Inspect".  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749772952639242320/unknown.png" height="100"></img>

You can use a keyboard shortcut.  
**Mac** - You can press **Command + Option/Alt + I**  
**Windows** - You can press **Control + Shift + I**

## Getting To The Message Box
In order to insert the iframe into the Schoology page, you need to edit the HTML of the message box.

First, you have to get to the Elements tab of the Dev Tools.  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749774694063800371/unknown.png" height="50"></img>

Next, you need to locate your Schoology message box.
To get there you can use the element finder at the top left of the Dev Tools. 
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749776789605449769/unknown.png" height="50"></img>  
Just click the icon and then click on the inside of the message box.  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749777343245058128/unknown.png" height="200"></img>

After clicking the message box, you should have the HTML selected in the Dev Tools.
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749778216415395861/unknown.png" height="150"></img>

## Inserting The Iframe
Now that you have the message box HTML selected, you can place your iframe inside it.

First, click the three dots on the left of the message box HTML and click "Edit as HTML".  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749779176474542130/unknown.png" height="250"></img>

Now that you can edit the HTML of the message box, delete the `<br>` tag in the HTML as shown below.  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749780773766168586/unknown.png" height="200"></img>

After deleting the `<br>` tag, you can put your iframe in the message tag. Just put the following code between the `<p>` tag.
```html
<iframe src="YOUR WEBSITE URL HERE"></iframe>
```
*(Replace 'YOUR WEBSITE URL HERE' with your website's URL)*

If you want to change the iframe's width and/or height you can add width and/or height attributes like this:
```html
<iframe src="YOUR WEBSITE URL HERE" width="WIDTH IN PIXELS HERE" height="HEIGHT IN PIXELS HERE"></iframe>
```
*(Replace 'WIDTH IN PIXELS HERE' and 'HEIGHT IN PIXELS HERE' with the width and/or height)*  
**If you don't provide the iframe's width or height it will scale to the specified size.**

Your HTML should look like this:  
<img src="https://cdn.discordapp.com/attachments/741402710581969019/749783958979346562/unknown.png" height="250"></img>

After you have your HTML ready, __**click somewhere in the dev tools outside the HTML to save**__.

And finally click "Post" under the message box to post your message!
