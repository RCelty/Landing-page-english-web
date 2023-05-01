const GeneralModule = {
  namespaced: true,
  state: {
    hotline: "0934 489 666",
    email: "toeic@anhngumshoa.com"
  },
  getters: {
    getHotline: state => state.hotline,
    getEmail: state => state.email
  }
};

export default GeneralModule;
