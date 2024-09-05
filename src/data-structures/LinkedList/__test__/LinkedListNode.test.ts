import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should create node with value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should link nodes together", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBe(node2);
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

  it("should convert node value to string", () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toBe("1");
  });

  it("should use custom toString callback", () => {
    const node = new LinkedListNode(1);
    const callback = (value: number) => `Value: ${value}`;

    expect(node.toString(callback)).toBe("Value: 1");
  });
});
