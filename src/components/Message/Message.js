import { message } from "antd";

const success = (mes = 'Đăng kí thành công') => {
    message.success(mes);
  };

  const error = (mes = 'Đăng kí thất bại') => {
    message.error= (mes)
  };

  const warning = (mes = 'Warning thất bại') => {
    message.warning= (mes)
  };

  export {success , error , warning}