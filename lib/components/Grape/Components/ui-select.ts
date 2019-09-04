
export default function(editor, _: any = {}) {
  let dc = editor.DomComponents;
  const config = require("../../../../rsys.config.json");
  let db = Object.keys(config.db || {}).map(db => {
    return db;
  });

  dc.addType('select-ui', {
    model: {
      defaults: {
        traits: [
          {
            type: 'select', // Type of the trait
            label: 'DB', // The label you will see in Settings
            name: 'conn', // The name of the attribute/property to use on component
            options: db
          },
          {
            type: "text",
            name: "columns",
            label: "Column"
          },
          {
            type: 'text',
            name: 'table',
            label: 'Table'
          },
          {
            type: 'button',
            // ...
            text: 'Test',
            full: true, // Full width button
            command: e => {
              alert('Open console to view a result.');
              console.clear();

              const attr = e.getSelected().attributes.attributes;
              const data = {};
              Object.keys(attr).forEach(k => {
                switch (k) {
                  case "columns":
                    data[k] = attr[k].split(",");
                    break;
                  default:
                    data[k] = attr[k];
                    break;
                }
              });
            }
          }
        ]
      }
    }
  });
}
