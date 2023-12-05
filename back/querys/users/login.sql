CREATE FUNCTION IF NOT EXISTS CheckCredentials(
    in_email VARCHAR(100), 
    in_password VARCHAR(100)
    )
RETURNS BOOLEAN
BEGIN
    DECLARE found_user INT;

    SELECT COUNT(*) INTO found_user
    FROM usuarios
    WHERE email = in_email AND password = in_password;

    IF found_user > 0 THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END