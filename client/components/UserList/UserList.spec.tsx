/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { act, fireEvent, render, screen } from "@testing-library/react";
 import { query } from './query';
 import UserList from "./UserList";
 import { MockedProvider } from "@apollo/client/testing";
 import { user } from "../Interface/UserInterface";

 test("<UserList/>", async () => {
     //const mocks:any =[];
     const ListOfUsers: Array<user> = [];
     for (let i = 0; i < 50; i++) {
         ListOfUsers.push({
             address: "address",
             email: "email",
             name: "name" + i,
             phone: "phone",
         });
     }
     render(
         <MockedProvider
             mocks={[
                {
                    request: {
                        query,
                        variables: {},
                    },
                    result: {
                        data: {
                            users: ListOfUsers,
                        },
                    },
                },
            ]}
         >
            <UserList/>
         </MockedProvider>,
     );
     expect(await screen.getByText("Loading...")).toBeDefined();
 
     await new Promise((resolve) => setTimeout(resolve, 0));
 
     expect(await screen.findAllByText("address")).toHaveLength(20);
 
     act(() => {
         fireEvent.change(screen.getByPlaceholderText("search user"), {
             target: { value: "name22" },
         });
     });
     expect(await screen.findAllByText("name22")).toHaveLength(1);
     expect(await screen.findByDisplayValue("name22")).toBeDefined();
 });
 