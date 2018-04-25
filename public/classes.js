class Usuario {
    constructor(pCedula, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido,pFechaNacimieto,  pEmail,pTipo,pTelefono, pPassword) {
        this._id = 0;
        this.cedula = pCedula;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.fechaNacimiento = pFechaNacimieto;
        this.email = pEmail;
        this.tipo = pTipo;
        this.telefono = pTelefono;
        this.password = pPassword;
        this.estado = 'activo';
    }

    actualizarEstadoUsuario(pEstado){
        this.estado = pEstado;

    }

    setId(pId){
    this._id = pId;
  }
    getPrimerNombre() {
        return this.primerNombre
    }

     getTelefono() {
        return this.telefono;
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

    getCedula() {
        return this.cedula;
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

    

    setEmail(pEmail) {
         this.email = pEmail;
    }

    setPassword(pPassword) {
         this.password =pPassword;
    }

    setTipo(pTipo) {
         this.tipo = pTipo;
    }
     setTelefono(pTelefono) {
         this.telefono = pTelefono;
    }

    setFechaNacimiento(pFechaNacimieto) {
         this.fechaNacimieto = pFechaNacimieto
    }

    setTelefono(pTelefono) {
         this.telefono = pTelefono;
    }


}

class Hotel{
    constructor(pFoto,pNombre, pLatitud, pLongitud, pProvincia, pCanton, pDistrito, pDireccionExacta, pTelefono, pTelefonoServicio, pEmail, pEmailServicio){
        this._id = 0;
        this.foto = pFoto;
        this.nombre = pNombre;
        this.latitud = pLatitud;
        this.longitud = pLongitud;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccionExacta = pDireccionExacta;
        this.telefono = pTelefono;
        this.telefonoServicio = pTelefonoServicio;
        this.email = pEmail;
        this.emailServicio = pEmailServicio;
        this.estado = 'activo';
    }
     
    actualizarEstado(pEstado){
        this.estado = pEstado;

    }
    getNombreHotel(){
        return this.nombre;
    }
     setIdHotel(pId){
    this._id = pId;
  }
    getLocalizacionHotel(){
        return `${this.latitude}, ${this.longitude}`;
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
        return `${this.provincia}, ${this.canton}, ${this.distrito}`;
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