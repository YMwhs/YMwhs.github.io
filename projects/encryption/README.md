# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 5
My Partner's Key: 10

Our initial shared key: 15

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| Spn             | Hey             | 15  |
| Hello           | Hello           | 0   |
| Dhhaz bw        | Whats up        | 7   |
| Pqvpkhpi owen   | Nothing much    | 2   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
EkEPzP
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
01000101 01101011 01000101 01010000 01111010 01010000
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Yared
    Destination: Myer  
    Sequence: 1/3
    Data: 01000101 01101011
    =========
    Packet 2:

    Source: Yared
    Destination: Myer
    Sequence: 2/3 
    Data: 01000101 01010000
    =========
    Packet 3:

    Source: Yared
    Destination: Myer
    Sequence: 3/3
    Data: 01111010 01010000
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? In asymmetric encryption you use a pair of keys, including private and public while in symmetric encryption you use one shared secret for messages. In this simulation we first used asymmetric encryption to get eachothers keys to start using symmetric encryption with the caeser cipher.
- Why is it important that this protocol uses a new key for each message? It's important to use a new key everytime because if you use the same key and a hacker gets their hand on it, they would have access to all the data that you encrypted using that key.
- Why is it important that you never share your secret key? It's important that you never share your secret key because if somebody has access to it, they can get all the data you have encrypted with the private key, and access all of your digital data.
- In the transport layer, do these messages use TCP or UDP? Why? It uses TCP because it's provides a reliable and safer connection, so your message is 100% sent and has a better chance at getting there without being intercepted. 
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. Firstly when they get to the internet layer, the packet is routed even thought it is currently unknown, until they reach their destination, that is the link layer where the message is finally decrypted and reecieved. 
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see? They can still see the header of the packet that can include things like the destination and senders ip addresses, and size of the packet.
