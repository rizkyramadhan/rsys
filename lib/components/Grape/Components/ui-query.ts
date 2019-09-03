import api from '@lib/api';

export default function(editor, _: any = {}) {
  let dc = editor.DomComponents;
  const config = require("../../../../rsys.config.json");
  let db = Object.keys(config.db || {}).map(db => {
    return db;
  });

  dc.addType("query-ui", {
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
            name: "sql",
            label: "Sql"
          },
          {
            type: "text",
            name: "params",
            label: "Params",
            placeholder: "sparator with coma (ex: 1,2,3)"
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
                .post("/api/db/query", data)
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
}
