FROM node:slim

RUN useradd -m -s /bin/bash website-user

WORKDIR /home/website-user/NullSec-Website-2025

COPY . .
RUN npm i
RUN npm run build

RUN chown -R website-user:website-user /home/website-user/NullSec-Website-2025

USER website-user

EXPOSE 3000

CMD ["npm", "start"]