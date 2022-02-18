import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { AccordionDetailsEstilizado, AccordionEstilizado, AccordionFlex, AccordionGrid, AccordionSummaryEstilizado, ContainerModal, ModalFlex } from './styled'
import { Container } from '@material-ui/core'
import prato from '../../images/prato.png'
import Loading from '../loading/Loading'

import Modal from 'react-modal'
import { toast } from 'react-toastify'

export const SimpleAccordion = ({ listDetailsFormated, searchByItem }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailsModal, setDetailsModal] = useState()

  const handleOpenModal = (item) => {
    setIsModalOpen(true)
    setDetailsModal(item)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const finalizingOrder = () => {
    setIsModalOpen(false)
    toast.success("Pedido realizado com sucesso!")
  }

  return (

    <>
      {Object.keys(listDetailsFormated).length > 0 ?
        <Container>
          {Object.keys(listDetailsFormated).map((group, index) => (
            <AccordionEstilizado key={index}>
              <AccordionSummaryEstilizado
                expandIcon={<ExpandMoreIcon />}
              >
                <p>{group}</p>
              </AccordionSummaryEstilizado>

              <AccordionDetailsEstilizado>
                <AccordionGrid>

                  {listDetailsFormated && listDetailsFormated[group].filter(searchByItem).map((item, index) => (
                    <AccordionFlex
                      key={index}
                      onClick={() => handleOpenModal(item)}

                    >

                      <div>
                        <img src={item.image ? item.image : prato} alt="imagem" />
                      </div>
                      <div>
                        <h2>{item.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p className='price'>{new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(item.price)}
                        </p>
                      </div>
                    </AccordionFlex>
                  ))}

                </AccordionGrid>
              </AccordionDetailsEstilizado>
            </AccordionEstilizado>
          ))}
        </Container> : <Loading />}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          onClick={handleCloseModal}
          className="react-modal-close">
          X
        </button>

        <ContainerModal>
          <img src={detailsModal && detailsModal.image ? detailsModal.image : prato} alt="image" />

          <ModalFlex>
            <div className='title-description'>
              <h2>{detailsModal && detailsModal.name}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className='price'>
              <p>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(detailsModal && detailsModal.price)}</p>
            </div>
          </ModalFlex>

          <button onClick={finalizingOrder}>Finalizar pedido</button>

        </ContainerModal>

      </Modal>
    </>
  );
}

export default SimpleAccordion