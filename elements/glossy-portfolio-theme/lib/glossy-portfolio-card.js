/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `glossy-portfolio-card`
 * 
 * @demo index.html
 * @element glossy-portfolio-card
 */
export class GlossyPortfolioCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "glossy-portfolio-card";
  }

  constructor() {
    super();
    this.title = "Title";
    // this.thumbnail = "https://github.com/NazmanRosman/graphic-portfolio/blob/main/lib/thumbnails/impactra.png?raw=true",
    this.thumbnail ="https://img.freepik.com/premium-photo/cool-cat-wearing-pink-sunglasses-with-neon-light-background_514761-16858.jpg",
    this.slug = "https://google.com";
  }


  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      thumbnail: {type: String},
      slug: {type: String},
   
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        height: auto;

      }

      *{
        box-sizing: border-box;
      }


      .thumbnail{
        transition: 0.3s ease-out;
        width: 100%;
        height:448px; 
        border-radius: 1.5%;
        object-fit: cover;
      }
      .container{
        position: relative;
        background-color: black;
        overflow: hidden;
        border-radius: 1.5%;
        background-color: #000000; 

 
      }
      .title{
        transition: opacity 0.3s ease-out;
        position: absolute;
        bottom: 36px;
        left: 36px;
        font-family: "Manrope", "Manrope Placeholder", sans-serif;
        font-size: 1.25rem;
        color: var(--text-color);
        opacity: 0;
        font-weight: 500;
        text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5); /* Horizontal offset, vertical offset, blur radius, color */
        width: 70%;
        
      }
      .arrow{
        transition: .3s ease-out;
        position: absolute;

        width: 60px;
        height: 60px;
        bottom: 25px;
        right: 100px;
      }
      .arrow-shape{

        opacity: 0;
        transform:scale(0.3) rotate(-135deg);
      }
      .arrow-box{        
        background-color: #ffffff99;
        opacity:0;
        border-radius: 6%
      }
  
      .container:hover, .link:focus-visible{
        .title{
          opacity: 1;
        }
        .thumbnail{
          opacity: 0.5;
          transform: scale(1.1)
        }
        .arrow-shape{
          opacity: 1;
          transform: scale(0.3) rotate(0);
          right:36px;
        }
        .arrow-box{
          opacity: 0.3;
          right:36px;
        }
      }

      @media (max-width: 1400px) {
        .title{
          opacity: 1;
        }
        .thumbnail{
          opacity: 0.5;
          transform: scale(1.1);
        }
        .title{
          left: 24px;
        }

        .arrow-shape{
          display: none;
        }
        .arrow-box{
          display: none;
        }
      }

      @media (max-width: 575.98px) {
        .thumbnail{

          height:300px; 
        }
      }


    `];
  }

  // Lit render the HTML
  render() {
    // console.log(this.thumbnail);
    return html`
<a class="link" href=${this.slug}>
  <div class="container">
    <img 
      @error=${this.handleImageError}
      src=${this.thumbnail} 
      class="thumbnail"
      alt=""
      loading="lazy"
      decoding="async"
      fetchpriority="low"
    />
    <div class="title">${this.title}</div>
    <div class="arrow arrow-box"></div>
    ${this.displayArrow()}
  </div>
</a>
`;
  }

  // hides image if it fails to load
  handleImageError(event) {
    const img = event.target;
    img.style.visibility='hidden'

  }

  displayArrow(){
    return html`
        <svg class="arrow arrow-shape" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="500" height="500">
      <defs>
        <image width="391" height="390" id="img1" href="data:image/png;base64,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"/>
      </defs>
      <style>
      </style>
      <use id="Shape 2 copy 3" href="#img1" transform="matrix(2.556,0,0,2.556,.716,2)"/>
    </svg>
    `
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(GlossyPortfolioCard.tag, GlossyPortfolioCard);