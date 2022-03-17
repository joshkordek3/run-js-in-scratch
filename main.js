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
          blockType: 'reporter,
          text: '[JS]',
          arguments: {
            JS: {
                type: 'string',
                defaultValue: 'JS'
            }
          }
        }, 
        {
          opcode: 'executeJS',
          blockType: 'command',
          text: 'execute [evalObject]',
          arguments: {
            evalObject: {
                type: 'string',
                defaultValue:'JS eval object'
            }
          }
        }, 
        {
          opcode: 'executeJSReport',
          blockType: 'reporter',
          text: 'get value [evalObject]',
          arguments: {
            evalObject: {
                type: 'string',
                defaultValue:'JS eval object'
            }
          }
        }
      ]
    };
  };
  getJS ({ JS }) {
    return eval(`function () { ${JS} }`);
  }
  executeJS ({ evalObject }) {
    evalObject();
  }
  executeJSReport ({ evalObject }) {
    return evalObject();
  }
}
