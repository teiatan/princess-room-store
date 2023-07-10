import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading, LogoContacts, Copyring, Phone, WorkSchedule, LogoPay} from "./Footer.styled";

export const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Контакти</Heading>
			<Phone href="tel:+380965554433">+38 096 555 44 33</Phone>
			<WorkSchedule>Щоденно з 9:00 - 20:00</WorkSchedule>
            <WorkSchedule>Дзвінок безкоштовний</WorkSchedule>
            <LogoContacts>
  <a href="https://www.instagram.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
    </svg>
  </a>
  <a href="https://www.facebook.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
    </svg>
  </a>
</LogoContacts>
                    <Copyring>© 2023. Chairs. Всі права захищені</Copyring>
		</Column>
		<Column>
			<Heading>Про компанію</Heading>
			<FooterLink href="#">Каталог</FooterLink>
			<FooterLink href="#">Фільтр</FooterLink>
			<FooterLink href="#">Кабінет</FooterLink>
		</Column>
		<Column>
			<Heading>Зв'язок з нами</Heading>
			<FooterLink href="#">Зворотній зв'язок</FooterLink>
			<FooterLink href="#">Реєстрація</FooterLink>
			<FooterLink href="#">Контакти</FooterLink>
		</Column>
        <Column>
			<Heading>Правила</Heading>
			<FooterLink href="#">Правила доставки</FooterLink>
			<FooterLink href="#">Умови доставки</FooterLink>
			<FooterLink href="#">Політика конфіденційності</FooterLink>
		</Column>
        
            </Row>
            <LogoPay>
  <a href="https://www.visa.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#visa`} />
    </svg>
  </a>
  <a href="https://www.paypal.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#paypal`} />
    </svg>
  </a>
  <a href="https://www.mastercard.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#mastercard`} />
    </svg>
  </a>
  <a href="https://www.gpay.com">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#gpay`} />
    </svg>
  </a>
  <a href="https://support.apple.com/uk-ua/HT204506">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#ipay`} />
    </svg>
  </a>
  <a href="https://ru.wikipedia.org/wiki/Near_Field_Communication">
    <svg>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#nfc`} />
    </svg>
  </a>
</LogoPay>
        </Container>
        
	</Box>
);
};

