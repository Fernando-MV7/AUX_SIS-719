document.addEventListener("DOMContentLoaded", function() {
    const buyList = [
      "books",
      "bread",
      "eraser",
      "earphones",
      "collection-cards",
      "hdmi",
      "vga",
      "motherboard",
      "university-books",
    ];
  
    const rootElement = document.getElementById("root");
  
    const listElement = document.createElement("ul");
  
    buyList.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      listElement.appendChild(listItem);
    });
  
    rootElement.appendChild(listElement);
  });
  
  
