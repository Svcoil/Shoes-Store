import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';

function OrdersPage() {
  // Essa tela mostra o estado inicial da área de pedidos do cliente.
  return (
    <Layout>
      <div className="container">
        <Section title="Meus Pedidos" titleAlign="left">
          <div className="simple-status-box">
            <h3>Você ainda não possui pedidos.</h3>
            <p>Quando um pedido for realizado, ele será exibido aqui.</p>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export default OrdersPage;
