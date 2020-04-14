import Vue from 'vue';
import Toolpic from 'toolpic';

export default function loadTemplate(template, docIndex, previewMain) {
  previewMain.clear();

  const component = template.documents[docIndex];

  // Initalize the rendering component
  const render = new Toolpic(component);

  previewMain.append(render.context);

  return render;

}
