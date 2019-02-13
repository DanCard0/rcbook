import express from 'express';
import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

import { contacts } from './data/contacts';

const schema = buildSchema(`
    type Query {
        contact(id: Int!): Contact
        contacts(name: String): [Contact]
    }
    
    type Mutation {
        updateContact(
            id: Int!,
            name: String!,
            phone: String!,
            email: String!
        ): Contact
    }

    type Contact {
        id: Int
        name: String
        phone: String
        email: String
    }
`);

const methods = {
    getContact: args => {
        const { id } = args;
        return contacts.filter(contact => contact.id === id)[0];
    },
    getContacts: args => {
        const { name = false } = args;
        // If we don't get a name we return all contacts
        if (!name) {
            return contacts;
        }
        // Returning contacts with same name...
        return contacts.filter(
            contact => contact.name.includes(name)
        );
    },
    updateContact: ({ id, name, phone, email }) => {
        contacts.forEach(contact => {
            if (contact.id === id) {
                // Updating only the fields that has new values...
                contact.name = name || contact.name;
                contact.phone = phone || contact.phone;
                contact.email = email || contact.email;
            }
        });
        return contacts.filter(contact => contact.id === id)[0];
    }
};

// Root has the methods we will execute to get the data
const root = {
    message: () => 'First message',
    contact: methods.getContact,
    contacts: methods.getContacts,
    updateContact: methods.updateContact
};

// GraphQL middleware
app.use('/graphql', expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true // This enables the GraphQL browser's IDE
}));

app.listen(3000, () => console.log('Running server on port 3000'));