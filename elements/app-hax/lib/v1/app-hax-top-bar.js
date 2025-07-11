// dependencies / things imported
import { LitElement, html, css } from "lit";
import "./app-hax-wired-toggle.js";
import { SimpleTourFinder } from "@haxtheweb/simple-popover/lib/SimpleTourFinder.js";

// top bar of the UI
export class AppHaxTopBar extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return "app-hax-top-bar";
  }

  constructor() {
    super();
    this.editMode = false;
  }

  static get properties() {
    return {
      editMode: {
        type: Boolean,
        reflect: true,
        attribute: "edit-mode",
      },
    };
  }

  static get styles() {
    return css`
      :host {
        --bg-color: var(--app-hax-background-color);
        --accent-color: var(--app-hax-accent-color);
        --top-bar-height: 48px;
        display: block;
        height: var(--top-bar-height);
      }

      /* @media (prefers-color-scheme: dark) {
        :root {
          --accent-color: white;
          color: var(--accent-color);
          
        }

        :host {
          background-color: black;
        } 
      } */

      .topBar {
        overflow: hidden;
        background-color: light-dark(
          rgba(255, 255, 255, 0.95),
          rgba(0, 0, 0, 0.95)
        );
        color: var(--accent-color);
        height: var(--top-bar-height);
        text-align: center;
        vertical-align: middle;
        border: 4px solid var(--app-hax-accent-color);
        border-radius: var(--ddd-radius-md);
        display: grid;
        grid-template-columns: 32.5% 35% 32.5%;
        transition-delay: 0.9s;
        transition: all 0.9s ease-in-out;
      }
      .topBar:hover,
      .topBar:focus-within {
        box-shadow: var(--ddd-boxShadow-md);
        background-color: light-dark(rgba(255, 255, 255, 1), rgba(0, 0, 0, 1));
      }

      :host([edit-mode]) .topBar {
        box-shadow: none;
        border: 0;
        border-bottom: 8px solid var(--app-hax-accent-color);
        border-radius: 0;
        background-color: light-dark(rgba(255, 255, 255, 1), rgba(0, 0, 0, 1));
      }

      .topBar .left {
        text-align: left;
        height: var(--top-bar-height);
        vertical-align: text-top;
      }

      .topBar .center {
        text-align: center;
        height: var(--top-bar-height);
        vertical-align: text-top;
      }

      .topBar .right {
        text-align: right;
        height: var(--top-bar-height);
        vertical-align: text-top;
      }
      @media (max-width: 640px) {
        .topBar .left {
          opacity: 0;
          pointer-events: none;
        }
        .topBar .center {
          text-align: left;
        }
        .topBar .right {
          text-align: left;
        }
        #home {
          display: none;
        }
        app-hax-search-bar {
          display: none;
        }
        .topBar {
          grid-template-columns: 0% 35% 65%;
          display: inline-grid;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="topBar" part="top-bar">
        <div class="left" part="left">
          <slot name="left"></slot>
        </div>
        <div class="center" part="center">
          <slot name="center"></slot>
        </div>
        <div class="right" part="right">
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(AppHaxTopBar.tag, AppHaxTopBar);
