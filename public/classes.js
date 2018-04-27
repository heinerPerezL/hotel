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
  getNombreCompleto(){
        return `${this.primerNombre}, ${this.segundoNombre}`;
    }

    getApellidos(){
        return `${this.primerApellido}, ${this.segundoApellido}`;
    }

    setId(pId){
    this._id = pId;
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
    
     setIdHotel(pId){
    this._id = pId;
  }
    getLocalizacionHotel(){
        return `${this.latitude}, ${this.longitude}`;
    }

  
    




}