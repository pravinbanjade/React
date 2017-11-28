import React from 'react';
import { Popup, Button, Header, Image, Modal, Icon } from 'semantic-ui-react';
import { Bars, Lines, Pies, Doughnuts } from '../Charts/Charts';
import { StockChart } from '../Charts/StockChart';

export const ModalBar = () => (
  <Modal trigger={<Button primary>Bar Graph</Button>} closeIcon closeButton>
    <Header icon='bar graph' content='Bar Graph' />
    <Modal.Content>
      <Bars />
    </Modal.Content>
  </Modal>
);

export const ModalLine = () => (
  <Modal trigger={<Button secondary>Line Graph</Button>} closeIcon>
    <Header icon='line graph' content='Line Graph' />
    <Modal.Content>
      <Lines />
    </Modal.Content>
  </Modal>
);

export const ModalPie = () => (
  <Modal trigger={<Button color='red'>Pie Chart</Button>} closeIcon>
    <Header icon='pie graph' content='Pie Chart' />
    <Modal.Content>
      <Pies />
    </Modal.Content>
  </Modal>
);

export const ModalDoughnut = () => (
  <Modal trigger={<Button color='green'>Doughnut Graph</Button>} closeIcon>
    <Header icon='pie graph' content='Doughnut Graph' />
    <Modal.Content>
      <Doughnuts />
    </Modal.Content>
  </Modal>
);

export const ModalStock = () => (
  <Modal trigger={<Button color='purple'>Stock Graph</Button>} closeIcon>
    <Header icon='stack overflow' content='Stock Graph' />
    <Modal.Content>
      <StockChart />
    </Modal.Content>
  </Modal>
);
