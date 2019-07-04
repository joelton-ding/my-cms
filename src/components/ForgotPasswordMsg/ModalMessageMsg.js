import React from 'react'
import { Modal, Button } from 'antd'
import { observer } from 'mobx-react'
import ModalStore from '../../store/ModalStore'

const ModalMessage = () => {
  let { state: {visible}, actions: {showModal}} = ModalStore
  return (
    <React.Fragment>
      <Button type="primary" onClick={() => showModal(true)}>
        Open Modal 
      </Button>
        <Modal
          title=""
          visible={visible}
          footer={null}
          onCancel={() => showModal(false)}
        >
          <p>An <strong>Email</strong> sent confirmation message let's you know the password reset email has been sent to your email address.</p>
        </Modal>
    </React.Fragment>
  )
}

export default observer(ModalMessage)


