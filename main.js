class Blocks {
  constructor (rt) {
    self.runtime = rt;
  }
  getInfo () {
    return {
      id: 'someBlocks',
      name: 'Some Blocks',
      blocks: [
        {
          opcode: 'getJS',
          blockType: BlockType.REPORTER,
          text: '[JS]',
          arguments: {
            JS: {
                type: ArgumentType.STRING,
                defaultValue: 'JS'
            }
          }
        }, 
        {
          opcode: 'executeJS',
          blockType: BlockType.COMMAND,
          text: 'execute [evalObject]',
          arguments: {
            evalObject: {
                type: ArgumentType.STRING,
                defaultValue:'JS eval object'
            }
          }
        }, 
        {
          opcode: 'executeJSReport',
          blockType: BlockType.REPORTER,
          text: 'get value [evalObject]',
          arguments: {
            evalObject: {
                type: ArgumentType.STRING,
                defaultValue:'JS eval object'
            }
          }
        }
      ]
    };
  };
  getJS (JS) {
    return eval('function () { JS }');
  }
  executeJS (evalObject) {
    evalObject();
  }
  executeJSReport (evalObject) {
    return evalObject();
  }
}
