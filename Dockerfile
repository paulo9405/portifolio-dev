FROM node:20-alpine

WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Build de produção do Next.js
RUN npm run build

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80


CMD ["npm", "run", "start"]
