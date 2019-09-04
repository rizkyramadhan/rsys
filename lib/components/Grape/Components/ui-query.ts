import api from "@lib/api";
import { observable } from "mobx";
import { defineElementDirect } from "../Elements/util";

export default function(editor, _: any = {}) {
  let dc = editor.DomComponents;
  let tm = editor.TraitManager;
  const config = require("../../../../rsys.config.json");
  let db = Object.keys(config.db || {}).map(db => {
    return db;
  });

  dc.addType("query-ui", {
    model: {
      init() {
        let id = 1;
        this.collection.models.forEach(d => {
          if (d.attributes.type === "query-ui") {
            id++;
          }
        });
        this.attributes.attributes.name = "query" + id;
      },
      defaults: {
        traits: [
          {
            type: "text",
            label: "Name",
            name: "name",
            default: ""
          },
          {
            type: "select",
            label: "DB",
            name: "conn",
            options: db,
            default: db[0]
          },
          {
            type: "text-sql",
            name: "sql",
            label: "Sql",
            placeholder: "select *"
          },
          {
            type: "button",
            // ...
            text: "Test",
            full: true, // Full width button
            command: e => {
              alert("Open console to view a result.");
              console.clear();
              const attr = e.getSelected().attributes.attributes;
              const data = {};
              Object.keys(attr).forEach(k => {
                switch (k) {
                  case "params":
                    data[k] = attr[k].split(",");
                    break;
                  default:
                    data[k] = attr[k];
                    break;
                }
              });

              api
                .post("/db/query", data)
                .then(function(response) {
                  console.log(response.result);
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
          }
        ]
      }
    }
  });

  tm.addType("text-sql", {
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait, component }) {
      const el = document.createElement("div");
      el.innerHTML = `
          <textarea class="text-sql__type" placeholder="${trait.attributes.placeholder}" rows="4"></textarea>
      `;
      return el;
    },
    onEvent({ elInput, component }) {
      const sql = elInput.querySelector(".text-sql__type").value;
      console.log(sql);
      component.addAttributes({
        sql
      });
    }
  });
}
