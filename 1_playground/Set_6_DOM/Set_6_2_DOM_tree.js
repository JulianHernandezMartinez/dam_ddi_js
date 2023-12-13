function change() {
    // document.getElementsByTagName("h2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:
    const header = document.getElementsByTagName("h2").item(0);
  
    // The firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";
  
    // Now header is "A dynamic document".
  
    // Access the first paragraph
    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph.";
  
    // Create a new Text node for the second paragraph
    const newText = document.createTextNode("This is the second paragraph.");
  
    // Create a new Element to be the second paragraph
    const newElement = document.createElement("p");
  
    // Put the text in the paragraph
    newElement.appendChild(newText);
  
    // Put the paragraph on the end of the document by appending it to
    // the body (which is the parent of para)
    para.parentNode.appendChild(newElement);
  }
  
  function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }


    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    
    /*
    // appends <table> into <body>
    document.body.appendChild(tbl);
    */
    const div3 = document.querySelector('#div3');
    // put de tlb as child of div3
    div3.appendChild(tbl); 
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  