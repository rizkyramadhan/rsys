import axios from "axios";

export default function(editor, opt: any = {}) {
  const c = opt;
  let dc = editor.DomComponents;
  let dt = editor.TraitManager;
  const config = require("../../../../rsys.config.json");
  let db = Object.keys(config.db || {}).map(db => {
    return db;
  });

  dc.addType("select-ui", {
    model: {
      defaults: {
        traits: [
          {
            label: "Attributes",
            type: "label"
          },
          {
            type: "select", // Type of the trait
            label: "DB", // The label you will see in Settings
            name: "conn", // The name of the attribute/property to use on component
            options: db
          },
          {
            type: "text",
            name: "column",
            label: "Column"
          },
          {
            type: "text",
            name: "table",
            label: "Table"
          },
          {
            type: "button",
            // ...
            text: "Test",
            full: true, // Full width button
            command: e => {
              alert("Open console to view a result.");
              console.clear();

              const attr = e.getComponents().models[0].attributes.attributes;
              const data = {};
              Object.keys(attr).forEach(k => {
                switch (k) {
                  case "column":
                    data["columns"] = attr[k].split(",");
                    break;
                  default:
                    data[k] = attr[k];
                    break;
                }
              });

              axios
                .post("/api/db/select", data)
                .then(function(response) {
                  console.log(response.data.result);
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

  c.styleTraits.forEach(trait => {
    dt.addType(trait.type, {
      createInput: c.styleManager[trait.type]
    });
  });
}
