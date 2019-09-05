package com.bandtec.jobbers.connector;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connector {
	public static Connection getConnection() throws ClassNotFoundException {
		Connection conn = null;

		String hostName = "irisproject.database.windows.net";
		String dbName = "Projeto_IRIS";
		String user = "irisProject";
		String password = "Batatacartao00";
		String connectionUrl = String.format(
				"jdbc:sqlserver://%s:1433;database=%s;user=%s;password=%s;encrypt=true;"
						+ "hostNameInCertificate=*.database.windows.net;loginTimeout=30;;",
				hostName, dbName, user, password);

		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			conn = DriverManager.getConnection(connectionUrl);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return conn;
	}

}
