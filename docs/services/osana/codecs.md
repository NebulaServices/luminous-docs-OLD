 # What is a codec 
A codec is a way to encode the URL that is shown to the user. This is to prevent the user from seeing the actual URL. 

# Available codecs
- none - `none`
- planetext - `planetext`
- base64 - `base64`
- XOR - `xor`
- WTFEncoder - `whatthefuck`


# Explanation of codecs

* XOR is a lightweight yet effective encoding method that is used to encode the URL. It is recommended to use this as it is the most stealthy.
* Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation
* Planetext is a simple encoding method that is used to encode the URL. We don't recommend using this as it is not secure or stealthy. Plaintext is the default encoding method.
* Whatthefuck Encoding is a method that is used to encode the URL. While it is secure, at this time it is unstable and we don't recommend using it as it may not operate as intended or expected.
