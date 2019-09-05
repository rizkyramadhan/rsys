const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const walk = tags => {
  const result = [];
  for (let i in tags) {
    const tag = tags[i];
    if (tag.tag) {
      const tagname = tag.tag.toLowerCase() + '-ui';
      const props =
        tag.props.map(prop => {
          if (prop.name && prop.text) {
            return `${prop.name}="${entities.encode(JSON.stringify(prop.text))}"`;
          }
        }) || [];
      let res = `<${tagname} data-gjs-type="${tagname}" ${props.join(' ')}>`;
      if (tag.children) {
        res += walk(tag.children);
      }
      res += `</${tagname}>`;
      result.push(res);
    }
  }

  return result.join('');
};

export const convertToHtml = (render: any) => {
  return walk([render]);
};
