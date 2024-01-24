// Implements CustomElement behavior
class MyParagraph extends HTMLElement {
  clickCounter = 0;
  highlightColor = "#FF0000";
  defaultColor = "#000000";
  highlighted = false;

  connectedCallback() {
    this.highlightColor =
      this.getAttribute("highlightColor") || this.highlightColor;
  }

  constructor() {
    super();
    // get <template> content
    const template = document.getElementById("my-paragraph");
    const templateContent = template.content;

    // Define DOM operations for cloned template content
    const clonedNode = templateContent.cloneNode(true);
    const containerEl = clonedNode.getElementById("container");
    const btnEl = clonedNode.getElementById("switch-color-btn");
    const counterValEl = clonedNode.getElementById("click-counter-val");
    btnEl.addEventListener("click", (e) => {
      e.preventDefault();
      this.highlighted = !this.highlighted;
      this.highlighted
        ? (containerEl.style.background = this.highlightColor)
        : (containerEl.style.background = this.defaultColor);

      this.clickCounter++;
      counterValEl.textContent = this.clickCounter;
    });

    // Create a new shadow DOM's root
    const shadowRoot = this.attachShadow({ mode: "open" });
    // Append the template content into the shadow DOM
    shadowRoot.appendChild(clonedNode);
  }
}

// Define <my-paragraph> element
customElements.define("my-paragraph", MyParagraph);
