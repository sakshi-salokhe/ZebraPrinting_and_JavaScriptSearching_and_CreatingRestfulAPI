<h2>Zebra Printing via Portal</h2><br/>
<h6>This project is developed using HTML, CSS, Javascript, ExpressJS.<br/> The technology used to deploy the project on the project and the REST API is "pm2". <br/> 
The project is a UI portal for healthcare to print the labels for Insurance providers. User can enter the unique number or name for a provider in the search bar. <br/>
there might be  more than 2000 providers on the API, however we display only the top 20. When user enters search phrase, the top 20 will change to the ones that fit the search criteria.<br />
Once there is only one label on the UI, the Print button is enabled. You can enter the "Enter" button on keyboard to press the Print button and the code sends the label to print on the printer connected via USB.<br/>
You can find the printer details below and the screenshots of the final project in the code.</h6>

<hr/>
<h4>Printer used: GX420D <h4/>
<h4>Installation:</h4>
npm install --save express<br/>
npm i --save csvtojson<br/>
npm install cors<br/>
npm i mime-types<br/>
<br/>
<h4>Running the server:</h4>
cd path to api to api folder and then type the following command:<br/>
node server.js<br/>
<ul>
  <li>
    <h4>In Mozilla Browser:</h4>
    Click the three horizontal sign symbol to the right hand side.<br/>
    Go to print<br/>
    Select page setup -> Margins and Header/Footer<br/>
    In the below section - select blank everywhere for all the dropdowns.<br/>
  </li>
  <li>
    <h4>In Chrome Browser:</h4>
    Do Ctrl+P and uncheck the header, footer, margin check-boxes from the print preview.<br/>
  </li>
</ul>
<h4>For printing without plugin:</h4>
<ul>
  <li>
    <u>Go to mozilla browser:</u><br/>
    Type about:config in the url bar<br/>
    Accept risks and continue<br/>
    Search for print.always_print_silent: if it is found - set it to true.<br />
    If not found - add the new command and set it Boolean value to true<br/>
  </li>
  <li>
    <u> For Chrome browser: </u><br/>
    End all Tasks for Chrome Browser.<br/>
    Go to chrome shortcut -> Properties -> Shortcut -> Target location<br/>
    In the location, after the path end: "....exe", enter this comand along with the space - " --kiosk-printing" or "--disable-print-preview" or "--kiosk"-> Apply -> Ok <br/>
    You should not get the print preview after this.<br/>
  </li>
</ul>
<h4>For printing:</h4>
Install the printer drivers and connect it to your system using USB.<br/>
Set the printer as default printer<br/>
<h4>For csv file from Aspen Dental:</h4>
Open new excel<br/>
Import from text and import the file and click "my data has headers"<br/>
Keep IBADD@IN as text<br/>
Add new column at "C" Column<br/>
Use this formula : =TEXT(B2, "00000000")<br/>
Then check the required column names to not have any special characters in them. <br/>
Save it in the folder of the codes or where the API is hosted. <br/>
<h4>To deploy the Express Rest API:</h4>
Go to Node Command Prompt and type the command: npm install pm2 -g <br/>
Then type: pm2 ls<br/>
If it throws an error: <br/>
  Go to C:\Users\<username>\AppData\Roaming\npm -> If you got error on the pm2 file, delete the pm2.ps1 file and clean the npm-cache folder.<br/>
  Now again go to the folder in terminal and do pm2 ls (It will throw a pretty description).<br />
  Now type the command:<b> pm2 start server_file_name.js --watch</b>(in this case server.js)<br/>
  If you type in <b>localhost:port number</b> in the url, you will see the REST API running even when the server is not started.<br/>
<h4>To deploy the static files as well:</h4>
  Go to command prompt <br/>
  Then type: pm2 ls<br/>
  cd to the folder where the server file is saved.<br />
  Now type the command <b>pm2 start server_file_name.js --watch </b>(in this case server.js)<br/>
  If you type in <b>localhost:port/home </b> in the url, you will see the REST API running even when the server is not started.<br/>
