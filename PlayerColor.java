import java.lang.Math;


/**
 *
 */
public enum PlayerColor {
    RED,
    BLUE,
    ORANGE,
    WHITE

    public static PlayerColor getRandom() {
        return values()[(int) (Math.random() * values().length)];
    }
}
