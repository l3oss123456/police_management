import React from "react";
import { Form, Icon, Input } from "antd";
import { StyledWarning, StyledButton } from "../Styled/index";

const styles = {
  width: { width: 300 }
};

const FormLogin = props => {
  const { getFieldDecorator, getFieldsError } = props.form;
  const { handleSubmit, hasErrors, handleChangeInput, respStatus } = props;
  return (
    <div>
      <Form layout="inline" onSubmit={v => handleSubmit(props.form, v)}>
        <p>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username !" }
              ]
            })(
              <div>
                <Input
                  style={styles.width}
                  autoFocus
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                  onChange={e => handleChangeInput(e)}
                />
                {respStatus === 400 && (
                  <StyledWarning>
                    กรุณาตรวจสอบชื่อผู้ใช้งานอีกครั้ง !
                  </StyledWarning>
                )}
              </div>
            )}
          </Form.Item>
        </p>
        <p>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password !"
                }
              ]
            })(
              <div>
                <Input.Password
                  style={styles.width}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={e => handleChangeInput(e)}
                />
                {respStatus === 400 && (
                  <StyledWarning>กรุณาตรวจสอบรหัสผ่านอีกครั้ง !</StyledWarning>
                )}
              </div>
            )}
          </Form.Item>
        </p>
        <p>
          <Form.Item>
            <StyledButton
              style={styles.width}
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Sign in
            </StyledButton>
          </Form.Item>
        </p>
      </Form>
    </div>
  );
};
export default Form.create()(FormLogin);
