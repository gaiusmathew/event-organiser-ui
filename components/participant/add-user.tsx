import {
  Button,
  Divider,
  Input,
  Modal,
  Text,
  Radio,
  Checkbox,
  Table,
  Dropdown,
} from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { Box } from "../styles/box";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

export const AddUser = () => {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(
    new Set(["dinner", "staying-overnight"])
  );

  const [selected1, setSelected1] = React.useState(
    new Set(["breakfast", "lunch", "dinner", "staying-overnight"])
  );
  const [selected2, setSelected2] = React.useState(
    new Set(["breakfast", "lunch"])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replace(/_/g, " "),
    [selected]
  );

  const selectedValue1 = React.useMemo(
    () => Array.from(selected1).join(", ").replace(/_/g, " "),
    [selected1]
  );
  const selectedValue2 = React.useMemo(
    () => Array.from(selected2).join(", ").replace(/_/g, " "),
    [selected2]
  );

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto onClick={handler}>
        Add User
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        width="600px"
        open={visible}
        onClose={closeHandler}
        className="add-user"
        fullScreen
        scroll
        blur
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h4>
            Add Participant
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$15",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
             <Flex
              css={{
                flexWrap: "wrap",
                gap: "$10",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
             
              <Input
                label="Church"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="church"
              />
            </Flex>
            
            <Flex
              css={{
                gap: "$10",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Name"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="Name"
              />
              {/* <Input
                        label="Last Name"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Last Name"
                     /> */}
              <Radio.Group
                orientation="horizontal"
                label="Gender"
                defaultValue="male"
                css={{justifyContent:"center"}}
              >
                <Radio value="male" color="primary">
                  Male
                </Radio>
                <Radio value="female" color="secondary">
                  Female
                </Radio>
              </Radio.Group>
            </Flex>

            <Flex
              css={{
                flexWrap: "wrap",
                gap: "$10",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Checkbox.Group
                label="Age Group"
                orientation="horizontal"
                color="primary"
                defaultValue={["a1"]}
              >
                <Checkbox value="a1">0-5</Checkbox>
                <Checkbox value="a2">6-12</Checkbox>
                <Checkbox value="a3">13-17</Checkbox>
                <Checkbox value="a4">18-25</Checkbox>
                <Checkbox value="a5">26-40</Checkbox>
                <Checkbox value="a6">41-60</Checkbox>
                <Checkbox value="a7">61-80</Checkbox>
                <Checkbox value="a8">80+</Checkbox>
              </Checkbox.Group>
            </Flex>
           
            <Flex
              css={{
                flexWrap: "wrap",
                gap: "$5",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text
                h5
                css={{
                  width: "100%",
                  marginBottom: "0",
                }}
                weight="normal"
              >
                Food and Accommodation
              </Text>

              <Flex
                css={{
                  flexWrap: "wrap",
                  gap: "$10",
                  alignItems: "center",
                  width: "100%",
                  "@lg": { flexWrap: "nowrap" },
                }}
              >
                <label>28th Aug - </label>
                <Dropdown>
                  <Dropdown.Button
                    flat
                    color="primary"
                    css={{ tt: "capitalize" }}
                  >
                    {selectedValue}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Multiple selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                  >
                    {/* 
                    <Dropdown.Item key="breakfast">Breakfast</Dropdown.Item>
                    <Dropdown.Item key="lunch">Lunch</Dropdown.Item> */}
                    <Dropdown.Item key="dinner">Dinner</Dropdown.Item>
                    <Dropdown.Item key="staying-overnight">
                      Staying Overnight
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Flex>

              <Flex
                css={{
                  flexWrap: "wrap",
                  gap: "$10",
                  alignItems: "center",
                  width: "100%",
                  "@lg": { flexWrap: "nowrap" },
                }}
              >
                <label>29th Aug - </label>
                <Dropdown>
                  <Dropdown.Button
                    flat
                    color="primary"
                    css={{ tt: "capitalize" }}
                  >
                    {selectedValue1}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Multiple selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selected1}
                    onSelectionChange={setSelected1}
                  >
                    <Dropdown.Item key="breakfast">Breakfast</Dropdown.Item>
                    <Dropdown.Item key="lunch">Lunch</Dropdown.Item>
                    <Dropdown.Item key="dinner">Dinner</Dropdown.Item>
                    <Dropdown.Item key="staying-overnight">
                      Staying Overnight
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Flex>

              <Flex
                css={{
                  flexWrap: "wrap",
                  gap: "$10",
                  alignItems: "center",
                  width: "100%",
                  "@lg": { flexWrap: "nowrap" },
                }}
              >
                <label>30th Aug - </label>
                <Dropdown>
                  <Dropdown.Button
                    flat
                    color="primary"
                    css={{ tt: "capitalize" }}
                  >
                    {selectedValue2}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Multiple selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selected2}
                    onSelectionChange={setSelected2}
                    heading="hhajAHjh"
                  >
                    <Dropdown.Item key="breakfast">Breakfast</Dropdown.Item>
                    <Dropdown.Item key="lunch">Lunch</Dropdown.Item>
                    {/* <Dropdown.Item key="dinner">Dinner</Dropdown.Item>
                    <Dropdown.Item key="staying-overnight">
                      Staying Overnight
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </Flex>
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer css={{ pt: "$0" }} >
          <Button auto onClick={closeHandler}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
