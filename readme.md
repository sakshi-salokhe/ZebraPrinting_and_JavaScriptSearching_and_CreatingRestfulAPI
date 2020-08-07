<b>Dependencies:</b><br/>
npm install --save express<br/>
npm i --save csvtojson<br/>
npm install cors<br/>
<br/>
<b>To run the server:</b><br/>
cd to api folder and then type the following command:<br/>
node server.js<br/>
<br/>
<b>In Mozilla Browser:</b><br/>
click the three horizontl sign symbol to the right hand side.<br/>
go to print<br/>
select page setup -> Margins and Header/Footer<br/>
In the below section - select blank everywhere for all the dropdowns.<br/>
<br/>
<b>For printing without plugin:</b><br/>
go to mozilla browser<br/>
type about:config in the url bar<br/>
Accept risks and continue<br/>
search for print.always_print_silent: if it is found - set it to true.<br />
If not found - add the new command and set it Boolean value to true<br/>
<br/>
<b>For printing:</b><br/>
install the printer drivers<br/>
(I have connected my printer via usb)<br/>
set the printer as default printer<br/>
(printer model - gx420d)<br/>
<br/>
<b>For csv file from Aspen Dental:</b><br/>
open new excel<br/>
Import from text and import the file and click "my data has headers"<br/>
keep IBADD@IN as text<br/>
add new column at "C" Column<br/>
use this formula : =TEXT(B2, "00000000")<br/>
Then check the required column names to not have any special characters in them. <br/>
Save it in the folder of the codes or where the API is hosted. <br/>
<br/>
To host the Express Rest API:<br/>
Go to Node Command Prompt and type the command: npm install pm2 -g <br/>
Then type: pm2 ls<br/>
If it throws an error: Go to C:\Users\<username>\AppData\Roaming\npm -> If you got error on the pm2 file, delete the pm2.ps1 file and clean the npm-cache folder.<br/>
Now again go to the folder in terminal and do pm2 ls (It will throw a pretty description).<br />
not type the command pm2 start server_file_name.js(in this case server.js)<br/>
If you type in localhost:port number in the url, you will see the REST API running even when the server is not started.<br/>
