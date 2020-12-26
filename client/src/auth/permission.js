export default class Permission{

    static hasPermission(int, permission){
        return (int & permission) === permission;
    }

    static CREATE_USER = 0x1;
    static DELETE_USER = 0x2;
    static EDIT_USER = 0x4;

    static CREATE_AUTHOR = 0x8;
    static DELETE_AUTHOR = 0x10;
    static EDIT_AUTHOR = 0x20;

    static CREATE_POST = 0x40;
    static DELETE_POST = 0x80;
    static EDIT_POST = 0x100;

    static IMAGE_UPLOAD = 0x200;
    static IMAGE_DELETE = 0x400;

}