class Session {
  constructor() {
    this.session = Object.assign(this.__session, this.urlSession);

  }
  get __session() {
    try {
      return JSON.parse(localStorage.getItem("toolpicSession")) || {};
    }
    catch (e) {
      return {};
    }
  }
  set template(template) {
    this.session.templateId = template.name;

    this.applySession();
  }
  set dataTemplateId(templateName) {
    this.session.dataTemplateRefId = templateName;

    this.applySession();
  }
  set data(dataset) {
    this.session.data = dataset;

    this.applySession();
  }
  set docIndex(index) {
    this.session.docIndex = index;

    this.applySession();
  }
  get template() {
    return this.session.templateId;
  }
  get docIndex() {
    return this.session.docIndex;
  }
  get data() {
    return this.session.templateId === this.session.dataTemplateRefId ? this.__session.data : null;
  }
  get urlSession() {
    const hashData = window.location.hash.substring(1);
    try {
      return JSON.parse(atob(hashData));
    }
    catch (e) {
      return {};
    }
  }
  updateUrl() {
    const sessionCopy = Object.assign(this.session);
    delete sessionCopy.data;
    delete sessionCopy.dataTemplateRefId;

    window.location.hash = btoa(JSON.stringify(sessionCopy));
  }

  applySession() {
    localStorage.setItem("toolpicSession", JSON.stringify(this.session));
  }

}

export default Session;
