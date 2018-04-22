class User {
    constructor(pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pId, pEmail, pPassword, pTipo, pFechaNacimieto, pTelefono) {
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.id = pId;
        this.email = pEmail;
        this.password = pPassword;
        this.tipo = pTipo;
        this.fechaNacimieto = pFechaNacimieto;
        this.telefono = pTelefono;

    }
    getPrimerNombre() {
        return this.primerNombre
    }

    getSegundoNombre() {
        return this.segundoNombre;
    }

    getPrimerApellido() {
        return this.primerApellido;
    }

    getSegundoApellido() {
        return this.segundoApellido;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getTipo() {
        return this.tipo;
    }

    getFechaNacimiento() {
        return this.fechaNacimieto;
    }

    getTelefono() {
        return this.telefono;
    }

    setPrimerNombre(pNuevoPrimerNombre) {
        this.primerNombre = pNuevoPrimerNombre;
    }

    setSegundoNombre(pSegundoNombre) {
         this.segundoNombre = pSegundoNombre;
    }

    setPrimerApellido(pPrimerApellido) {
         this.primerApellido = pPrimerApellido;
    }

    setSegundoApellido(pSegundoApellido) {
         this.segundoApellido = pSegundoApellido;
    }

    setId(pId) {
         this.id = pId;
    }

    setEmail(pEmail) {
         this.email = pEmail;
    }

    setPassword(pPassword) {
         this.password =pPassword;
    }

    setTipo(pTipo) {
         this.tipo = pTipo;
    }

    setFechaNacimiento(pFechaNacimieto) {
         this.fechaNacimieto = pFechaNacimieto
    }

    setTelefono(pTelefono) {
         this.telefono = pTelefono;
    }


}

class Hotel{
    constructor(pNombre, pLatitud, pLongitud, pProvincia, pCanton, pDistrito, pDireccion, pTelefono, pTelefonoServicio, pEmail, pEmailServicio){
        this.nombre = pNombre;
        this.latitud = pLatitud;
        this.longitud = pLongitud;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccion = pDireccion;
        this.telefono = pTelefono;
        this.telefonoServicio = pTelefonoServicio;
        this.email = pEmail;
        this.emailServicio = pEmailServicio;
    }

    getNombreHotel(){
        return this.nombre;
    }

    getLocalizacionHotel(){
        return '${this.latitud}, ${this.longitud}';
    }

    getProvincia(){
        return this.provincia;
    }

    getCanton(){
        return this.canton;
    }

    getDistrito(){
        return this.distrito;
    }

    getDireccion(){
        return this.direccion;
    }

    getTelefono(){
        return this.telefono;
    }

    getTelefonoServicio(){
        return this.telefonoServicio;
    }

    getEmail(){
      return this.email;
    }

    getEmailServicio(){
        return this.emailServicio;
    }



     setNombreHotel(pNombreHotel){
         this.nombre = pNombreHotel;
    }

    setLatitud(pLatitud){
         this.latitud = pLatitud;
    }

    setLongitud(pLongitud){
         this.longitud = pLongitud;
    }

    setProvincia(pProvincia){
         this.provincia = pProvincia;
    }

    setCanton(pCanton){
        this.canton = pCanton
    }

    setDistrito(pDistrito){
       this.distrito = pDistrito;
    }

    setDireccion(pDireccion){
        this.direccion =pDireccion
    }

    setTelefono(pTelefono){
         this.telefono = pTelefono;
    }

    setTelefonoServicio(pTelefonoServicio){
         this.telefonoServicio = pTelefonoServicio;
    }

    setEmail(pEmail){
       this.email = pEmail;
    }

    setEmailServicio(pEmailServicio){
         this.emailServicio = pEmailServicio;
    }

    




}