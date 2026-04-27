const Index = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '40px 32px',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: '#d32f2f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <span style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold', lineHeight: 1 }}>✕</span>
        </div>
        <h1 style={{
          color: '#d32f2f',
          fontSize: '24px',
          fontWeight: 700,
          margin: '0 0 12px',
        }}>Pagamento Recusado</h1>
        <p style={{
          color: '#666',
          fontSize: '15px',
          lineHeight: 1.6,
          margin: '0 0 24px',
        }}>
          O pagamento não foi aprovado. Para liberar o acesso ao conteúdo, realize novamente o pagamento no valor de <strong style={{ color: '#333' }}>R$ 14,90</strong>.
        </p>
        <a
          href="https://seguropagamentos.com.br/of4"
          style={{
            display: 'inline-block',
            backgroundColor: '#d32f2f',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Fazer Pagamento Agora
        </a>
        <p style={{
          color: '#999',
          fontSize: '13px',
          marginTop: '16px',
          lineHeight: 1.5,
        }}>
          Qualquer valor enviado será extornado em menos de 24 horas.
        </p>
      </div>
    </div>
  );
};

export default Index;
