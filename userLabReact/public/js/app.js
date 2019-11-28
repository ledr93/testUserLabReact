class Container extends React.Component {
    render(){
        return(
            <div>
                <div id="header_desktop">
                    <Header title='USERLAB TEST'/>
                    <div style={{height:"2px",backgroundColor:"black"}}>

                    </div>
                </div>
                <div  className="container" style={{paddingTop:"15px"}}>
                    <h1>Listado de Pacientes</h1>
                <PacientesList />
                </div>
                <ModalWindow />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                            UserLabTest
                    </a>
                </nav>
        );
    }
}

class PacientesList extends React.Component{
    render(){
        return(
            <div className="row">
            <div className="col-md-12">
                <div className="col-12">
                    <div className="btn-group" style={{float:"right",paddingBottom:"15px"}}>
                        <a href="#" className="btn btn-outline-secondary" onClick={addPaciente} data-toggle="modal">
                            <i className="fa fa-plus"></i> Agregar</a>
                        <a href="#" className="btn btn-outline-secondary" onClick={editPaciente}>
                            <i className="fa fa-pencil"></i> Editar</a>
                    </div>
                    <div className="col-md-12"></div>
                </div>
                        <table id="tblpacientes" className="table table-hover table-striped table-bordered" >
                            <thead className="thead-dark">
                            <tr>
                                <td >
                                    ID
                                </td>
                                <td >
                                    NOMBRE
                                </td>
                                <td >
                                    APELLIDO
                                </td>
                                <td >
                                    CORREO ELECTRONICO
                                </td>

                                <td >
                                  TELEFONO MOVIL
                                </td>
                                <td >
                                 TELEFONO FIJO
                                </td>
                                <td >
                                 DPI
                                </td>
                            </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
            </div>
            </div>
        );
    }
}

class ModalWindow extends React.Component{
    render(){
        return(
            <div id="modal" className="modal " tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div id="descripcionModal" className="col-10">
                                        <p>Ingrese la información que se solicita</p>
                                    </div>

                                </div>
                                <div className="row" style={{display:"none"}}>
                                    <div className="col-4">
                                        <label className="">ID</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" type="text" id="txtId" className="form-control"
                                               placeholder="ID" autoComplete="off"></input>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">Nombre</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" type="text" id="txtNombre" className="form-control"
                                               placeholder="Nombres" autoComplete="off"></input>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">Apellido</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" rows="2" id="txtApellido" className="form-control"
                                                  placeholder="apellidos"
                                                  autoComplete="off"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">correo</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" rows="2" id="txtCorreo" className="form-control"
                                               placeholder="correo electronico"
                                               autoComplete="off"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">Telefono movil</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" rows="2" id="txtTelefonomovil" className="form-control"
                                               placeholder="telefono movil"
                                               autoComplete="off"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">Telefono fijo</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="number" maxLength="250" rows="2" id="txtTelefonofijo" className="form-control"
                                               placeholder="telefono fijo"
                                               autoComplete="off"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label className="">DPI</label>
                                    </div>
                                    <div className="col-8">
                                        <input maxLength="250" rows="2" id="txtDpi" className="form-control"
                                               placeholder="DPI"
                                               autoComplete="off"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={saveData}><span
                                className="fa fa-floppy-o " aria-hidden="true"></span> Guardar
                            </button>
                            <button type="button" className="btn btn-info" data-dismiss="modal"><span
                                className="fa fa-times " aria-hidden="true"></span> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('content')
);

