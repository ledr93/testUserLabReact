/*test userLab*/

$(document).ready(function () {
    getAllRequest();
});


function getAllRequest()
{
    axios.get('http://localhost:8080/WsUserLab/getPacientes')
        .then(function (response) {
            tblpacientes(response.data.pacientes);
            $('#tblpacientes').on('click', '.clickable-row', function(event) {
                $(this).addClass('selected_row').siblings().removeClass('selected_row');
            });

        })
        .catch(function (error) {
            console.log(error);
        })
}

function postRequest(data)
{
    let config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
  axios.post('http://localhost:8080/WsUserLab/editPacientes',data,config)
      .then(function (response) {
          alert(response.data.respuesta);
          var $modal = $('#modal');
          $modal.modal('hide');
          getAllRequest();
          clearElements();
      })
      .catch(function (error) {
        console.log(error);
      })
}

function postRequestnew(data)
{
    let config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios.post('http://localhost:8080/WsUserLab/addPacientes',data,config)
        .then(function (response) {
            alert(response.data.respuesta);
            var $modal = $('#modal');
            $modal.modal('hide');
            getAllRequest();
            clearElements();
        })
        .catch(function (error) {
            console.log(error);
        })
}

function tblpacientes(dataList){
    var $tabla = $('#tblpacientes tbody');
    $tabla.empty();
    if(dataList == null || dataList.length == 0){
        $('<tr/>').append(
            $('<th colspan="7" style="text-align: center;"/>').html('No se tiene resultados')
        ).appendTo($tabla);
    }
    $.each(dataList,function (i,data) {
        $('<tr class="clickable-row"/>').data('paciente-id',data.id).data('paciente-nombre',data.nombre
        ).data('paciente-apellido',data.apellido).data('paciente-correo',data.correo)
            .data('paciente-telefonomovil',data.telefonomovil)
            .data('paciente-telefonofijo',data.telefonofijo)
            .data('paciente-dpi',data.dpi).append(
            $('<th/>').html(data.id)
        ).append(
            $('<th/>').html(data.nombre)
        ).append(
            $('<th/>').html(data.apellido)
        ).append(
            $('<th/>').html(data.correo).data('paciente-correo',data.correo)
        ).append(
            $('<th/>').html(data.telefonomovil).data('paciente-telefonomovil',data.telefonomovil)
        ).append(
            $('<th/>').html(data.telefonofijo).data('paciente-telefonofijo',data.telefonofijo)
        ).append(
            $('<th/>').html(data.dpi).data('paciente-dip',data.dpi)
        ).appendTo($tabla)
    });
}

function addPaciente() {
    console.log("Agrega paciente");
    clearElements();
    var $modal = $('#modal');
    $modal.find('.modal-title').text('Agregar Paciente');
    $modal.modal('show');

}

function editPaciente(){
    console.log("editar paciente");
    var $tabla = $('#tblpacientes')
    var $elemento = $tabla.find('.selected_row');
    if($elemento.length==0){
        alert('seleccione un elemento para editar');
        return;
    }

    var $idPaciente = $elemento.data('paciente-id');
    var $nombre = $elemento.data('paciente-nombre');
    var $apellido = $elemento.data('paciente-apellido');
    var $correo = $elemento.data('paciente-correo');
    var $telefonomovil = $elemento.data('paciente-telefonomovil');
    var $telefonofijo = $elemento.data('paciente-telefonofijo');
    var $dpi = $elemento.data('paciente-dpi');

    var $modal = $('#modal');
    $modal.find('.modal-title').text('Editar Paciente');
    $modal.modal('show');

    var $idTxt = $('#txtId');
    var $nombreTxt = $('#txtNombre');
    var $apellidoTxt = $('#txtApellido');
    var $correoTxt = $('#txtCorreo');
    var $telefonomovilTxt = $('#txtTelefonomovil');
    var $telefonofijoTxt = $('#txtTelefonofijo');
    var $dpiTxt = $('#txtDpi');

    $idTxt.val($idPaciente);
    $nombreTxt.val($nombre);
    $apellidoTxt.val($apellido);
    $correoTxt.val($correo);
    $telefonomovilTxt.val($telefonomovil);
    $telefonofijoTxt.val($telefonofijo);
    $dpiTxt.val($dpi);

}

function saveData(){

    var $idTxt = $('#txtId').val();
    var $nombreTxt = $('#txtNombre').val();
    var $apellidoTxt = $('#txtApellido').val();
    var $correoTxt = $('#txtCorreo').val();
    var $telefonomovilTxt = $('#txtTelefonomovil').val();
    var $telefonofijoTxt = $('#txtTelefonofijo').val();
    var $dpiTxt = $('#txtDpi').val();

    if(!isEmail($correoTxt)){
        alert("ingresa un correo valido");
        return;
    }

    if($idTxt==""){
        let data = JSON.stringify({
            nombre: $nombreTxt,
            apellido: $apellidoTxt,
            correo: $correoTxt,
            celular: $telefonomovilTxt,
            telefono: $telefonofijoTxt,
            dpi:$dpiTxt
        });
        postRequestnew(data);

    }else{
        let data = JSON.stringify({
            id: $idTxt,
            nombre: $nombreTxt,
            apellido: $apellidoTxt,
            correo: $correoTxt,
            celular: $telefonomovilTxt,
            telefono: $telefonofijoTxt,
            dpi:$dpiTxt
        });
        postRequest(data);
    }


}

function clearElements(){
    var $idTxt = $('#txtId');
    var $nombreTxt = $('#txtNombre');
    var $apellidoTxt = $('#txtApellido');
    var $correoTxt = $('#txtCorreo');
    var $telefonomovilTxt = $('#txtTelefonomovil');
    var $telefonofijoTxt = $('#txtTelefonofijo');
    var $dpiTxt = $('#txtDpi');

    $idTxt.val("");
    $nombreTxt.val("");
    $apellidoTxt.val("");
    $correoTxt.val("");
    $telefonomovilTxt.val("");
    $telefonofijoTxt.val("");
    $dpiTxt.val("");
}


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
