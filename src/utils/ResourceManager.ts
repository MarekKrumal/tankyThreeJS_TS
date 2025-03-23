import { Texture, TextureLoader } from "three";

class ResourceManager {
  private static _instance = new ResourceManager();
  public static get instance() {
    return this._instance;
  }

  private constructor() {}

  //resource list
  private _groundTextures: Texture[] = [];

  //load entry point
  public load = async () => {
    const textureLoader = new TextureLoader();
    await this.loadGroundTextrues(textureLoader);
  };

  // method for groud textures loading
  private loadGroundTextrues = async (textureLoader: TextureLoader) => {
    const groundTextureFiles = [
      "g1.png",
      "g2.png",
      "g3.png",
      "g4.png",
      "g5.png",
      "g6.png",
      "g7.png",
      "g8.png",
    ];

    // load the textures
    for (let index = 0; index < groundTextureFiles.length; index++) {
      const element = groundTextureFiles[index];
      const texture = await textureLoader.loadAsync(`textures/${element}`);
      this._groundTextures.push(texture);
    }
  };

  public getRandomGroundTexture = () => {
    return this._groundTextures[
      Math.floor(Math.random() * this._groundTextures.length)
    ];
  };
}

export default ResourceManager;
