# 🌡️ Dashboard BuStop - IoT + Big Data

Este projeto é uma **dashboard interativa** desenvolvida em **Next.js** para visualizar dados coletados de sensores IoT conectados a um sistema de Big Data.  
A aplicação consome dados armazenados em um **MongoDB** via **API Node/Express**, e apresenta as leituras em tempo real em um gráfico.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** (React + TypeScript)
- **Recharts** → para visualização de dados
- **Axios** → para consumo da API
- **Tailwind CSS** → para estilização moderna e responsiva

---

## 🧩 Estrutura do Projeto

```
dashboard/
├── app/
│   ├── page.tsx          # Página principal com o gráfico
│   ├── layout.tsx        # Layout base do Next.js
│   └── globals.css       # Estilos globais (Tailwind)
├── public/               # Arquivos estáticos
├── package.json
└── README.md
```

---

## ⚙️ Configuração e Execução

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Executar em modo de desenvolvimento
```bash
npm run dev
```

Acesse em: **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Conexão com o Backend

A dashboard consome dados da API em:  
👉 **`http://localhost:8080/api/dados`**

Certifique-se de que o backend (Node/Express ou Python/FastAPI) esteja rodando e retornando os dados no formato JSON, por exemplo:
```json
[
  { "temperatura": 28.5, "timestamp": "2025-10-27T18:45:00Z" },
  { "temperatura": 29.1, "timestamp": "2025-10-27T18:50:00Z" }
]
```

---

## 📊 Funcionalidades

- Exibição dinâmica das leituras de temperatura.
- Atualização automática dos gráficos.
- Interface responsiva e acessível.

---
